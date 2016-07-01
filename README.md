# Sorting-Algorithms

For this assignment you will be responsible for the following:

1. Create a module that implements each of the folowing sorting algorithms:
  1. [Quick sort](https://en.wikipedia.org/wiki/Quicksort)
  2. [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
  2. [Merge sort](https://en.wikipedia.org/wiki/Merge_sort)
  3. [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)
  4. [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)

Each module should be able to sort a randomized array of numbers.

2. Create a README.md file and for each algorithm include the following:
  1. Explain to a five year old how the algorithm works (3-4 sentences max)
  2. Psuedo code for each sorting implementation
  3. In your own words, describe the performance of the alogirthm for the following cases:
    1. Best case scenario
    2. Worst case scenario

3. Stretch Goal - Create a web app that visually sorts a randomized group via with DOM manipulation. Your web app should be able to be used based on user input. Your site doesn't need to be to fancy, here is an example of how it might look [Sorting Algorithms Visualized](https://www.youtube.com/watch?v=kPRA0W1kECg).
Note: Quick Sort and Merge Sort are difficult to visualize in the DOM. Do these last.

![merge sort gif](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif "Merge Sort gif")
______________________________________________________________________________________________________________________________

* Explain to a five year old how the algorithm works (3-4 sentences max)
* In your own words, describe the performance of the alogirthm for the following cases:
     * Best case scenario
     * Worst case scenario

*Bubble sort:
  How it works: In this sorting algorithm, we want to picture the numbers in a vertical group. The numbers in this vertical group (array) can be thought of as bubbles and the smallest numbers are the lightest which bubble up to the top, or beginning, of the array. We start by taking the first element in the array and comparing it to the following element in the array. If the following number is less than the first, they swap places. You continue to do this until all the numbers in the array are in order from lowest to highest.
    *Best Case Scenario:
      The best case scenario for this algorithm is if the numbers in the array are already sorted! If the array comes to us pre-sorted, the complexity is only O(n).This means that it performs well with smaller groups of numbers but performance depreciates as the numbers grow larger.
    *Worst Case Scenario:
      The worst case scenario would be if the array was completely reversed. This would mean that the distance and direction elements must move is the maximum amount of times. The complexity О(n^2) is the same as the average case.


*Quicksort
  How it works: In this algorithm, you start off by grabbing any number, usually the first, and begin making comparisons to that number. You want to put all the lesser numbers on the left side and all the greater numbers on the right. After splitting up the two groups, you take out another number and begin comparing the rest of the numbers on that side to that number. You keep doing this until you reach a single element. After you hit the bottom and have no more groups to break up, you add all the single elements back together in th right order(due to them being categorized on each side of your comparison number.)
    *Best Case Scenario:
    *Worst Case Scenario:


*Merge sort
*Insertion sort
*Selection sort