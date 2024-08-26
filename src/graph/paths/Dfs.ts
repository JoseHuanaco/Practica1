import Vertex from '../Vertex';

export const Dfs = (source: Vertex) => {
    source.setVisited(true);
    console.log(source.label);
    source.getNeighbors().forEach((edge) => {
        const neighbor = edge.destination;
        if (neighbor && !neighbor.visited) {
            Dfs(neighbor);
        }
    });
}

