import React from 'react';

function SignUp() {
  return (
    <div>
        <form>
            <label>
                <p>Name</p>
                <input type="text" />
            </label>
            <label>
                <p>Email</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  );
}

export default SignUp;
