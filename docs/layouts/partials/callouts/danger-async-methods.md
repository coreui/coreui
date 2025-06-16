#### Asynchronous methods and transitions

All our API methods are **asynchronous** and initiate a **transition**. They return to the caller as soon as the transition begins but **before it concludes**. Furthermore, a method call on a **transitioning component will be ignored**.

[Refer to our JavaScript documentation for further details](/getting-started/javascript/#asynchronous-functions-and-transitions).
