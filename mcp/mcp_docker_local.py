import docker
from docker.errors import DockerException, NotFound, APIError
from mcp.server.fastmcp import FastMCP

# Inicializar FastMCP
mcp = FastMCP("Docker Local Controller")

# Conectar al daemon local de Docker (lee /var/run/docker.sock en WSL)
try:
    client = docker.from_env()
except DockerException as e:
    client = None
    print(f"Error inicializando cliente Docker: {e}")


@mcp.tool()
def list_containers(all_containers: bool = False) -> str:
    """Lista contenedores locales.
    
    Args:
        all_containers: Si es True, incluye contenedores detenidos.
    """
    if not client:
        return "Error: No se pudo conectar al daemon de Docker."

    try:
        containers = client.containers.list(all=all_containers)
        if not containers:
            return "No se encontraron contenedores."

        output = []
        for c in containers:
            ports = ", ".join([f"{k}->{v[0]['HostPort']}" for k, v in (c.ports or {}).items() if v])
            output.append(
                f"- ID: {c.short_id} | Nombre: {c.name} | Estado: {c.status} | Imagen: {c.image.tags[0] if c.image.tags else 'none'} | Puertos: [{ports}]"
            )
        return "\n".join(output)
    except APIError as e:
        return f"Error al consultar contenedores: {str(e)}"


@mcp.tool()
def get_container_logs(container_id_or_name: str, tail: int = 50) -> str:
    """Obtiene las últimas líneas de logs de un contenedor específico.
    
    Args:
        container_id_or_name: Nombre o ID del contenedor.
        tail: Cantidad de líneas a recuperar (por defecto 50).
    """
    if not client:
        return "Error: No se pudo conectar al daemon de Docker."

    try:
        container = client.containers.get(container_id_or_name)
        logs = container.logs(tail=tail, stdout=True, stderr=True).decode("utf-8", errors="replace")
        return logs if logs.strip() else "El contenedor no ha generado logs recientes."
    except NotFound:
        return f"Error: Contenedor '{container_id_or_name}' no encontrado."
    except APIError as e:
        return f"Error al obtener logs: {str(e)}"


@mcp.tool()
def restart_container(container_id_or_name: str, timeout_seconds: int = 10) -> str:
    """Reinicia un contenedor en ejecución.
    
    Args:
        container_id_or_name: Nombre o ID del contenedor a reiniciar.
        timeout_seconds: Segundos de espera antes de forzar el apagado.
    """
    if not client:
        return "Error: No se pudo conectar al daemon de Docker."

    try:
        container = client.containers.get(container_id_or_name)
        container.restart(timeout=timeout_seconds)
        return f"Contenedor '{container_id_or_name}' reiniciado exitosamente."
    except NotFound:
        return f"Error: Contenedor '{container_id_or_name}' no encontrado."
    except APIError as e:
        return f"Error al reiniciar: {str(e)}"


@mcp.tool()
def inspect_container_resources(container_id_or_name: str) -> str:
    """Obtiene una captura del consumo actual de CPU y memoria de un contenedor."""
    if not client:
        return "Error: No se pudo conectar al daemon de Docker."

    try:
        container = client.containers.get(container_id_or_name)
        # stream=False toma un snapshot único
        stats = container.stats(stream=False)
        
        # Cálculo básico de memoria
        mem_usage = stats.get("memory_stats", {}).get("usage", 0) / (1024 * 1024)
        mem_limit = stats.get("memory_stats", {}).get("limit", 1) / (1024 * 1024)
        mem_percent = (mem_usage / mem_limit) * 100 if mem_limit > 0 else 0

        return (
            f"Contenedor: {container.name} ({container.short_id})\n"
            f"Uso de Memoria: {mem_usage:.2f} MB / {mem_limit:.2f} MB ({mem_percent:.1f}%)\n"
            f"Estado: {container.status}"
        )
    except NotFound:
        return f"Error: Contenedor '{container_id_or_name}' no encontrado."
    except APIError as e:
        return f"Error al inspeccionar recursos: {str(e)}"


if __name__ == "__main__":
    # Ejecuta el servidor sobre stdio
    mcp.run(transport="stdio")