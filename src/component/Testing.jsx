import React from "react";

function Testing() {
    return (
        <div className="form">
            <div className="form-margin">
                <h3 className="black">Reg Card</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Register Card"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="Order No"/>
                    <input type="text" className="form-size" name="MemberId" placeholder="Member Id"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="text" className="form-size" name="ReturnUrl" placeholder="Return URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="black">Query Token</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Query Token"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="Card Token"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="black">Authorization</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Authorization"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="Order No"/>
                    <input type="text" className="form-size" name="Amount" placeholder="Amount"/>
                    <input type="text" className="form-size" name="OrderDesc" placeholder="Order Description"/>
                    <input type="text" className="form-size" name="Name" placeholder="Name"/>
                    <input type="text" className="form-size" name="EmailAdd" placeholder="Email"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="Card Token"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="black">Capture</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Capture"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="Order No"/>
                    <input type="text" className="form-size" name="Amount" placeholder="Amount"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="black">Pay</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Pay"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="Order No"/>
                    <input type="text" className="form-size" name="Amount" placeholder="Amount"/>
                    <input type="text" className="form-size" name="OrderDesc" placeholder="Order description"/>
                    <input type="text" className="form-size" name="Name" placeholder="Name"/>
                    <input type="text" className="form-size" name="EmailAdd" placeholder="Email"/>
                    <input type="text" className="form-size" name="CardToken" placeholder="Card Token"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
            <div className="form-margin">
                <h3 className="black">Void Pay</h3>
                <form className="flex-form" action="https://www.mybillpayment.com/testing/validation.php" method="post">
                    <input type="text" className="form-size" name="Command" placeholder="Void Pay"/>
                    <input type="text" className="form-size" name="OrderNo" placeholder="Order No"/>
                    <input type="text" className="form-size" name="StatusUrl" placeholder="Status URL"/>
                    <input type="submit" className="form-size" value="Proceed"/>
                </form>
            </div>
        </div>
    );
}

export default Testing;