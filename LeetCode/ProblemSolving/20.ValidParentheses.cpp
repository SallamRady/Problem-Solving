class Solution {
    public:
        bool isValid(string s) {
            stack<char> myStack;
            for(int i=0;i<s.size();i++){
                if(myStack.empty()){
                    myStack.push(s[i]);
                }else{
                    if(s[i] == ')' && myStack.top() == '(')myStack.pop();
                    else if(s[i] == ']' && myStack.top() == '[')myStack.pop();
                    else if(s[i] == '}' && myStack.top() == '{')myStack.pop();
                    else
                        myStack.push(s[i]);
                }
            }
            return myStack.empty()?true:false;
        }
    };