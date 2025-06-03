import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro'
  }, [])

  return (
    <MainTemplate>
       <Container>
        <Countdown />
        <MainForm />
       </Container>
    </MainTemplate>
  )
}