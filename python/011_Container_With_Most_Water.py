# Given n non-negative integers a1, a2, ..., an , where each represents a 
# point at coordinate (i, ai). n vertical lines are drawn such that the 
# two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, 
# which, together with the x-axis forms a container, such that the 
# container contains the most water.Notice that you may not 
# slant the container.
#
# Time complexity O(n)
# Space complexity O(1)

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height)-1
        area = 0
        
        while(left < right):
            temp_area = (right - left) * min(height[left], height[right])
            if area < temp_area:
                area = temp_area
            if height[left] < height[right]:
                left += 1
            elif height[left] > height[right]:
                right -= 1
            else:
                left += 1
        return area