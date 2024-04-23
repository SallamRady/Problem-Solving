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
    float x, y;
    // *input
    cin >> x >> y;
    // *proccessing...
    // *Output
    if (x == 0 && y == 0)
        cout << "Origem" << endl;
    else if (x == 0 && y != 0)
        cout << "Eixo Y" << endl;
    else if (x != 0 && y == 0)
        cout << "Eixo X" << endl;
    else if (x > 0 && y > 0)
        cout << "Q1" << endl;
    else if (x < 0 && y > 0)
        cout << "Q2" << endl;
    else if (x < 0 && y < 0)
        cout << "Q3" << endl;
    else if (x > 0 && y < 0)
        cout << "Q4" << endl;
};

int main()
{
    //* prepare..code
    fast;
    // declaration
    solution();

    return 0;
}