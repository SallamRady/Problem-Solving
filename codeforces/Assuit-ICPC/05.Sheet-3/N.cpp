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

int charIndex(string str, char ch)
{
    int index = str.find(ch);

    if (index != string::npos)
        return index;

    return -1;
}
// TODO::declare and define helper functions and variables
void solution()
{
    // *declare our variables..
    int a, b, splitterCount = 0;
    string str;
    // *input
    cin >> a >> b;
    cin >> str;
    // *proccessing...
    for (auto c : str)
        if (c == '-')
            splitterCount++;
    if ((str.size() == (a + b + 1)) && charIndex(str, '-') == a && splitterCount == 1)
        cout << "Yes" << endl;
    else
        cout << "No" << endl;
    // *Output...
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}