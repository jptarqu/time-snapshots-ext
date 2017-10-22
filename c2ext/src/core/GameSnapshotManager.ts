import { flattenDistanceCombinations } from './DistanceHelper';

export type ObjectsSnapshot = number[][]
export class GameSnapshotManager {
    private timelineSnapshots: ObjectsSnapshot[] = []
    private trackedObjectTypes: ObjectType[] = []
    constructor() {
     
    }
    StartTracking(typeToTrack:ObjectType) {
        this.trackedObjectTypes.push(typeToTrack)
    }
    DoSnapshot() {
        const posList = this.getPositionsOfType(0)
        const newSnapshot = flattenDistanceCombinations(posList)
        this.timelineSnapshots.push(newSnapshot)
    }
    GetTimeLineSnapshots() {
        return this.timelineSnapshots
    }
    GetTimeLineSnapshotsAsJson() {
        return JSON.stringify(this.timelineSnapshots)
    }
    private getPositionsOfType(typeIdx: number): number[] {
        if (typeIdx >= this.trackedObjectTypes.length )  {
            return []
        }
        return this.trackedObjectTypes[typeIdx]
            .instances
            .map((instance) => [instance.x,instance.y])
            .reduce((p, c) => p.concat(c))  ;
    }
}