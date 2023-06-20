///import language labs.
#include <iostream>
#include <map>
#include <string>
#include <cmath>
# include <math.h>
#include <cmath>
#include <cstdio>
#include <vector>
#include <algorithm>
#include <bitset>
#include <set>
#include <stack>
#include <iomanip>
#include <queue>
///---------------Helpers.-------------///
#define endl "\n"
#define ll long long
#define fast ios_base::sync_with_stdio(false);cin.tie(0);
#define all(a) a.begin(), a.end()
#define scan(v) for(auto &it : v)cin >> it ;
#define mod(a , n) (a % n + n ) % n
///----------use namespace std.----------///
using namespace std;
///--------File Function to get input from file.-
void File() {
#ifndef ONLINE_JUDGE
    //freopen("Input.txt", "r", stdin);
    //freopen("Output.txt", "w", stdout);
#endif
}

///***** Divide and conquer *****///
void Solution();
ll gcd(ll n,ll m){
    if(n > m) swap(n,m);
    int temp = m%n;
    while(temp){
        temp = m%n;
        m =n;
        n =temp;
    }
    return m;
}
ll lcm(ll n,ll m){
    ll GCD = gcd(n,m);
    return ((n*m)/GCD);
}
bool isNumeric(string const &str){
    return !str.empty() && str.find_first_not_of("0123456789") == string::npos;
}
string toLower(string str){
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
    }
    return str;
}
string toUpper(string str){
    for (int i = 0; i < str.size(); i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 32;
    }
    return str;
}
int bubblesort(int a[], int n){
    bool swapped = false;
    int numSwaps = 0;

    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                swap(a[j], a[j + 1]);
                numSwaps++;
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }

    return numSwaps;
}


int main() {
    //** Prepare my Code **//
    fast;
    //** Solution **//
    Solution();
}
void Solution(){
    ///Declaration ...
    int n,q,l,r;
    queue<int> answer;
    ///Take input from user...
    cin>>n;
    vector<int> arr(n);
    scan(arr);
    cin>>q;
    ///Processing...
    vector<int> S(n+1,0);
    for (int i = 0; i < q; ++i) {
        cin>>l>>r;
        if(l > r)swap(l,r);
        S[l] -= 1;
        if(r != n)
            S[r+1] += 1;
    }
    for (int i = 1; i <= n; ++i) {
        S[i] +=S[i-1];
    }
    for (int i = 0; i < n; ++i) {
        if(S[i+1] >= 0){
            answer.push(arr[i]);
        }
    }
    ///Output....
    cout<<answer.size()<<endl;
    while(!answer.empty()){
        cout<<answer.front()<<" ";
        answer.pop();
    }
}

