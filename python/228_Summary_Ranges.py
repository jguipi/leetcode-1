class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        solutionArray = []
        if len(nums) == 0:
            return []
        if len(nums) == 1:
            return [str(nums[0])]
        else:
            firstPointer = nums[0] 
            for x in range(1, len(nums)):
                if(nums[x-1] + 1 != (nums[x])):
                    if firstPointer == nums[x-1]:
                        solutionArray.append(str(firstPointer))
                        firstPointer = nums[x]
                    else:
                        solutionArray.append(str(firstPointer)+"->"+str(nums[x-1]))
                        firstPointer = nums[x]
                if(x == len(nums)-1):
                    if nums[x-1] + 1 != nums[x]:
                        solutionArray.append(str(nums[x]))
                    else:
                        solutionArray.append(str(firstPointer)+"->"+str(nums[x]))
            return solutionArray