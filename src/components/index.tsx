import { Container } from "./styled";

export function Header() {
    return (
        <Container>
            <div>
                <img src="./logo.svg" alt="" />
            </div>
            <div>
                <p>
                    01 D:06 H:28 M:40S
                </p>
            </div>
            <button>
                ASSINE AGORA
            </button>

        </Container>
    )
}