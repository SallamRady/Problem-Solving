#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // Declaration...
    int ar1[2];
    int ar2[3] = {0};
    int ar3[] = {1, 2, 3, 4};
    string fruits[2] = {"apple", "mango"};
    vector<int> v1(5); // size = 5
    vector<int> v2 = {1, 5, 2, 7, 9};
    vector<int> v3(5, 0); // size = 5 with initial value = 0 for each element
    vector<bool> visited(100, false);
    vector<vector<int>> v2d = {
        {1, 3, 1},
        {1, 5, 2, 6},
        {30, 11},
        {0, 8, 10, 24, 4}};
    // Processing...

    // output....
    cout << ar2[0] << endl;
    cout << ar3[0] << endl;
    cout << fruits[1] << endl;
    // size tell you number of elements in array.
    cout << v2.size() << endl;
    // Capacity of vrctor tell you what is the actional memory allocated.
    cout << v2.capacity() << endl;
    // push_back O(1)
    v2.push_back(15);
    // pop_back O(1)
    v2.pop_back();
    // loop on vector O(n)
    for (int i = 0; i < v2.size(); i++)
        cout << v2[i] << ",";
    cout << endl;
    for (int ele : v2)
        cout << ele << ",";

    return 0;
}