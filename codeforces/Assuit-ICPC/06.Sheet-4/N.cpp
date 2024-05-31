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
    int n, counter = 1;
    char prev;
    string str;
    // *input
    cin >> n >> str;
    // *proccessing...
    prev = str[0];
    for (int i = 1; i < n; i++)
    {
        if (prev != str[i])
        {
            counter++;
            prev = str[i];
        }
    }
    // *Output...
    cout << counter << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}