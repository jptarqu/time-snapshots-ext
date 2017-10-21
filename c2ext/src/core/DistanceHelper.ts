 
export function calcSquaredDistance(x1: number, y1: number,
    x2: number, y2: number) {
        return (x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1) ;
    }
     
export function mapWithDistance([x1, y1]: number[], otherPositions: number[]) {
    const newList = []
    for (var xIdx = 0; xIdx < otherPositions.length; xIdx += 2) {
        const x2 = otherPositions[xIdx];
        const y2 = otherPositions[xIdx + 1];
        newList.push([x1, y1, x2, y2, calcSquaredDistance(x1, y1, x2, y2) ])
    };
    return newList
    }
export function mapDistanceCombinations(positions: number[]) {
    const newList = []
    for (var xIdx = 0; xIdx < positions.length; xIdx += 2) {
        const relX = positions[xIdx];
        const relY = positions[xIdx + 1];
        const otherPositions = positions.slice(0,xIdx).concat(positions.slice(xIdx + 2,positions.length))
        newList.push(mapWithDistance([relX, relY], otherPositions))
    };
    return newList
    }
    