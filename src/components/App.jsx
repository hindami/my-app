import React from "react";

function App() {
    return (
        <div className="form">
            <div className="form-margin">
                <h3 className="white">Reg Card</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="registercard"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="000001"/>
                    <input type="text" className="form-size" name="MemberId" placeholder="member email or mobile"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="text" className="form-size" name="ReturnUrl" placeholder="http://yourreturnurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="white">Query Token</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="querytoken"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="XsSIqhSyfDjWIbqyZNtS7qCCSrLfuEAquPUKG9jETRI="/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="white">Authorization</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="authorization"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="1000001"/>
                    <input type="text" className="form-size" name="Amount" placeholder="3.00"/>
                    <input type="text" className="form-size" name="OrderDesc" placeholder="Your order description"/>
                    <input type="text" className="form-size" name="Name" placeholder="Your name"/>
                    <input type="text" className="form-size" name="EmailAdd" placeholder="youremail@youremail.com"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="XsSIqhSyfDjWIbqyZNtS7qCCSrLfuEAquPUKG9jETRI="/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="white">Capture</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="capture"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="1000001"/>
                    <input type="text" className="form-size" name="Amount" placeholder="2.90"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="white">Pay</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="pay"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="2000001"/>
                    <input type="text" className="form-size" name="Amount" placeholder="10.00"/>
                    <input type="text" className="form-size" name="OrderDesc" placeholder="Your order description"/>
                    <input type="text" className="form-size" name="Name" placeholder="Your name"/>
                    <input type="text" className="form-size" name="EmailAdd" placeholder="youremail@youremail.com"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="XsSIqhSyfDjWIbqyZNtS7qCCSrLfuEAquPUKG9jETRI="/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="white">Void Pay</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="voidpay"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="2000001"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="http://yourstatusurl"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
        </div>
    );
}

export default App;