# USESTATE

# General Rules of Hooks 

Component name must be Upper Case 
USESTATE cannot be outside of the function or Components body
cannot call conditionally 

eg : if () { 
    hook is inside here // useState
}
Result will be Error. 


We can use multiple useState values. 

### useEffect 

 By default runs after every re-render 
 Cleanup Function 
 Second Parameter 

 We cannot call Hook comditionally 
 second condition or second parameter is []array of dependencies or list of dependencies  
 Each time its dependencies [] will change and re-run. 
 You can use as many useEffect as you want 
 but if you left the dependency array [] empty , it will run only one time 

Eg: 
    useEffect(() => {
        console.log('Hello World');
        
    }, []) // In this case , Hello World will be printed only one time, since empty dependency . 

- Everytime, we have useEffect , we have the optional return. 

### Forms 

- In Js 👾 
const input = document.getElementById ('mytext'); 
const inputValue = input.value

- In React 👾 
value , onChange