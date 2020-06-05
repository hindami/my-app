import React from "react";

function App() {
    return (
    <form action="https://www.mybillpayment.com/validation.php" method="post">
        <input type="text" name="Command" value="registercard"/>
        <input type="text" name="OrderNo" value="000001"/>
        <input type="text" name="MemberId" value="member email or mobile"/>
        <input type="text" name="StatusUrl" value="http://yourstatusurl"/>
        <input type="text" name="ReturnUrl" value="http://yourreturnurl"/>
        <input type="submit" value="Proceed"/>
    </form>
    );
}

export default App;