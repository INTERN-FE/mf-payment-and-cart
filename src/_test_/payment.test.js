import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Payment from "../components/payment";

describe("Payment", () => {
  it("It should render item correctly based on URL", () => {
    const url =
      "/payment?items=[{%22id%22%3A1%2C%22title%22%3A%22Fjallraven+-+Foldsack+No.+1+Backpack%2C+Fits+15+Laptops%22%2C%22price%22%3A109.95%2C%22description%22%3A%22Your+perfect+pack+for+everyday+use+and+walks+in+the+forest.+Stash+your+laptop+(up+to+15+inches)+in+the+padded+sleeve%2C+your+everyday%22%2C%22category%22%3A%22men%27s+clothing%22%2C%22image%22%3A%22https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81fPKd-2AYL._AC_SL1500_.jpg%22%2C%22rating%22%3A{%22rate%22%3A3.9%2C%22count%22%3A120}%2C%22qty%22%3A1}%2C{%22id%22%3A2%2C%22title%22%3A%22Mens+Casual+Premium+Slim+Fit+T-Shirts+%22%2C%22price%22%3A22.3%2C%22description%22%3A%22Slim-fitting+style%2C+contrast+raglan+long+sleeve%2C+three-button+henley+placket%2C+light+weight+%26+soft+fabric+for+breathable+and+comfortable+wearing.+And+Solid+stitched+shirts+with+round+neck+made+for+durability+and+a+great+fit+for+casual+fashion+wear+and+diehard+baseball+fans.+The+Henley+style+round+neckline+includes+a+three-button+placket.%22%2C%22category%22%3A%22men%27s+clothing%22%2C%22image%22%3A%22https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg%22%2C%22rating%22%3A{%22rate%22%3A4.1%2C%22count%22%3A259}%2C%22qty%22%3A1}%2C{%22id%22%3A3%2C%22title%22%3A%22Mens+Cotton+Jacket%22%2C%22price%22%3A55.99%2C%22description%22%3A%22great+outerwear+jackets+for+Spring%2FAutumn%2FWinter%2C+suitable+for+many+occasions%2C+such+as+working%2C+hiking%2C+camping%2C+mountain%2Frock+climbing%2C+cycling%2C+traveling+or+other+outdoors.+Good+gift+choice+for+you+or+your+family+member.+A+warm+hearted+love+to+Father%2C+husband+or+son+in+this+thanksgiving+or+Christmas+Day.%22%2C%22category%22%3A%22men%27s+clothing%22%2C%22image%22%3A%22https%3A%2F%2Ffakestoreapi.com%2Fimg%2F71li-ujtlUL._AC_UX679_.jpg%22%2C%22rating%22%3A{%22rate%22%3A4.7%2C%22count%22%3A500}%2C%22qty%22%3A3}]";

    render(
      <MemoryRouter initialEntries={[url]}>
        <Payment />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole("article").length).toEqual(3);
  });
});
