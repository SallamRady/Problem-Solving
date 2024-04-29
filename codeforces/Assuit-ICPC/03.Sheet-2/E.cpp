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
    int n, x, mx;
    // *input
    cin >> n;
    // *proccessing...
    for (int i = 0; i < n; i++)
    {
        cin >> x;
        mx = i == 0 ? x : max(x, mx);
    }

    // *Output....
    cout<<mx<<endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}