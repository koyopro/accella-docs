import { FormModel } from "accel-record";
import { User } from "src/models";

// Model for handling sign-in process, extending FormModel
export class SignIn extends FormModel {
  email: string = "";
  password: string = "";

  authenticate(): User | undefined {
    const user = User.findBy({ email: this.email });
    if (user?.authenticate(this.password)) {
      return user;
    }
  }
}
