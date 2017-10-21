import { GameSnapshotManager } from '../GameSnapshotManager';
import {
    calcSquaredDistance,
    concatResultsToRelative,
    flattenDistanceCombinations,
    mapDistanceCombinations,
    mapWithDistance,
} from '../DistanceHelper';

describe('GameSnapshotManager', () => {
    function setupTestInstance() {

        const manager = new GameSnapshotManager();
        const testType:ObjectType = {
            instances: [
                {
                    x: 1,
                    y: 1,
                    uid: 1,
                    width: 1,
                    height: 1,
                    angle: 1
                },
                
                {
                    x: 3,
                    y: 3,
                    uid: 2,
                    width: 1,
                    height: 1,
                    angle: 1
                }
            ]
        }
        manager.StartTracking(testType)
        return manager
    }
    it('makes snapshots', () => {
        //setup
        const manager = setupTestInstance()
        //act
        manager.DoSnapshot()

        //Assert
        expect(manager.GetTimeLineSnapshots())
            .toEqual([[[1, 1, 3, 3, 8], [3, 3, 1, 1, 8]]])
    })
})