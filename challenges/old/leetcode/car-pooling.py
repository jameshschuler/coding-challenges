import heapq
from typing import List


class Solution:
    def test(self, trips: List[List[int]], cap: int) -> bool:
        trips.sort(key=lambda t: t[1])
        minHeap = []  # pair of [end, numPass]
        currPass = 0

        for t in trips:
            numPass, start, end = t

            while minHeap and minHeap[0][0] <= start:
                currPass -= minHeap[0][1]
                heapq.heappop(minHeap)

            currPass += numPass
            if currPass > cap:
                return False

            heapq.heappush(minHeap, [end, numPass])

        return True


print(Solution().test([[2, 1, 5], [3, 3, 7]], 4))
