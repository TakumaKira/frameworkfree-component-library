import type { MetaFunction } from "@remix-run/node";
import { MyElementComponent } from '../components/MyElement';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <MyElementComponent>
        <p>This is child content</p>
      </MyElementComponent>
    </div>
  );
}
