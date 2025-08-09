from typing import List


class Solution:
    def test(self, ops: List[str]) -> int:
        stack = []
        for op in ops:
            if op == "+":
                stack.append(stack[-1] + stack[-2])
            elif op == "D":
                stack.append(stack[-1] * 2)
            elif op == "C":
                stack.pop()
            else:
                stack.append(int(op))
        return sum(stack)


print(Solution().test(["5", "2", "C", "D", "+"]))
