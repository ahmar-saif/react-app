import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import UserBlock from "~/components/user-block";
import Counter from "~/components/counter";
import Form from "~/components/form";

export default function Home() {
  // const name = "Ahmar";
  // const age = 22;
  // const skills = [
  //     'Python', 'Laravel'
  // ];

  const user = {
    name: 'Ahmar', age: 22, skills: ['Python', 'Laravel', 'PHP', 'React']
  }

  return (
      <div>
        <UserBlock user={user}/>
        <Counter />
        <Form />
      </div>
  );
}
