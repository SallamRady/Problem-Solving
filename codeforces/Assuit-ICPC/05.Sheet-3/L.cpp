#include <iostream>
#include <iomanip>
#include <cmath>
#include <bitset>
#include <string>
#include <algorithm>
#include <set>
#include <map>
#include <climits>
#include <stack>
#include <vector>
#include <deque>
#include <queue>
#include <unordered_set>
#define endl "\n"
#define ll long long
#define fast                          \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);
#define all(a) a.begin(), a.end()
#define scan(v)        \
    for (auto &it : v) \
        cin >> it;
using namespace std;
// TODO::declare and define helper functions and variables
void solution()
{
    // *declare our variables..
    int testcases, n, mx;
    // *input
    cin >> testcases;
    // *proccessing...
    while (testcases--)
    {
        cin >> n;
        vector<int> arr(n);
        scan(arr);

        for (int start = 0; start < n; start++)
        {
            for (int end = start; end < n; end++)
            {
                for (int i = start; i <= end; ++i)
                {
                    if (i == start)
                    {
                        mx = arr[i];
                    }
                    else
                    {
                        mx = max(mx, arr[i]);
                    }
                }
                cout << mx << " ";
            }
        }
        cout << endl;
    }
    // *Output....
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}