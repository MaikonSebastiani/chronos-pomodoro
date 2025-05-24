import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
export function Home() {
  return (
    <MainTemplate>
       <Container>
        <Countdown />
        <MainForm />
       </Container>
    </MainTemplate>
  )
}