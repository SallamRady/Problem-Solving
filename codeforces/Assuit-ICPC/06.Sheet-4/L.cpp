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
    int n, q, x = 0, l = 0, r = 0;
    string str, query;
    char ch = 'a';
    // *input
    cin >> n >> q >> str;
    // *proccessing...
    while (q--)
    {
        cin >> query;
        if (query == "pop_back")
        {
            str.pop_back();
        }
        else if (query == "front")
        {
            cout << str.front() << endl;
        }
        else if (query == "back")
        {
            cout << str.back() << endl;
        }
        else if (query == "sort")
        {
            cin >> l >> r;
            if (l > r)
                swap(l, r);
            l--;
            sort(str.begin() + l, str.begin() + r);
        }
        else if (query == "reverse")
        {
            cin >> l >> r;
            if (l > r)
                swap(l, r);
            l--;
            reverse(str.begin() + l, str.begin() + r);
        }
        else if (query == "print")
        {
            cin >> x;
            x--;
            cout << str[x] << endl;
        }
        else if (query == "substr")
        {
            cin >> l >> r;
            if (l > r)
                swap(l, r);
            l--;
            cout << str.substr(l, r - l) << endl;
        }
        else if (query == "push_back")
        {
            cin >> ch;
            str.push_back(ch);
        }
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