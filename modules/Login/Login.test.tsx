export {}
// import React from "react";
// import { fireEvent, render } from "@testing-library/react";
// import { LogIn } from "./Login";

// function renderButton() {
//   return render(<LogIn  />);
// }

// describe("<TextField />", () => {
//     test('submits username and password', async () => {

//         // ARRANGE
//         const email = "testemail@gmail.com";
//         const password = "pass1234";
//         const mockLogin = jest.fn();
    
//         render(<LogIn handleSubmit={mockLogin(email, password)} />);
    
//         const usernameInput = screen.getByRole('textbox', { name: /email/i });
//         userEvent.type(usernameInput, 'testemail@gmail.com');
//         const passwordInput = screen.getByLabelText('Password');
//         userEvent.type(passwordInput, 'pass1234');
//         const loginButton = screen.getByRole('button', { name: /^Log in$/i });
//         expect(loginButton).not.toBeDisabled();
    
//         // ACT
//         userEvent.click(loginButton);
    
//         // ASSERT
//         await expect(mockLogin).toHaveBeenCalled();
//         await expect(mockLogin).toHaveBeenCalledTimes(1);
//         await expect(mockLogin).toHaveBeenCalledWith("testemail@gmail.com", "pass1234");
//       });
    
//     });


