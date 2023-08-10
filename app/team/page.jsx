import Contributors from "./Contributors";
import Team from "./Team";

export const metadata = {
  title: "Team",
};

export default function page() {
  return (
    <div className="py-12">
      <Team />
      <hr className="my-16" />
      <Contributors />
    </div>
  );
}
