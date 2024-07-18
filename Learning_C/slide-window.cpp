/*
  Given a 1-based indexing array arr[] of non-negative integers and an integer sum. 
  You mainly need to return the left and right indexes(1-based indexing) of that subarray. 
  In case of multiple subarrays, return the subarray indexes which come first on moving 
  from left to right. If no such subarray exists return an array consisting of element -1.

  Input: arr[] = { 15, 2, 4, 8, 9, 5, 10, 23, sum = 23
  Output: 2 5
  Explanation: Sum of elements between indices 2 and 5 is 2 + 4 + 8 + 9 = 23
*/

#include <iostream>
#include <vector>
using namespace std;

vector<int> subArraySum (
  int n, 
  long long sum
  vector<int>& arr, 
) {
  int start = 0, last = 0;
  unsigned long long currsum = 0;
  bool flag = false;
  vector<int> res;

  //iterar o array
  for (int i = 0; i < n; i++) {
    currsum += arr[i];

    if (currsum >= sum) {
      last = i;

      while (sum < currsum && start < last) {
        currsum -= arr[start];
        start += 1;
      }

      if (currsum == sum ) {
        res.push_back(start+1);
        res.push_back(last+1);
        flag = true;
        break;
      }
    }
  }

  if (!flag) { res.push_back(-1) }

  return res;
};