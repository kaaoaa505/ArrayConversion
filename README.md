Given an array of integers, 

Perform the following operations until the array contains only one element:

-   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;

-   On the 2nd, 4th, 6th, etc. iterations replace each element with the 1-based sum product.

After the algorithm has finished, there will be a single element left in the array. Return that element.

**Example**

- For a = [1, 2, 3, 4, 5, 6, 7, 8], 

- the output should be:

- solve(a) = 186. 

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [10, 26] -> [36], so the answer is 36.
