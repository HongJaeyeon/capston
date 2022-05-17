import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function Login(){
    interface LoginI {
        email: string;
        password: string;
      }

    const onValid = (data: any) => {
        console.log(data);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginI>({
        defaultValues: {
            // email: "@naver.com",
        },
    });

    return (
        <Container>
            <Contents>
                {/* 사업자 등록 번호 */}
                <Form
                    onSubmit={handleSubmit(onValid)}
                >
                    <Input
                    {...register("email", {
                        required: "이메일을 입력해주세요",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@+[A-Za-z0-9._%+-]$/,
                            message: "이메일 형식으로 작성해주세요.",
                        },
                    })}
                    placeholder="Email"
                    />
                    <span>{errors?.email?.message}</span>
                    <Input
                    {...register("password", { required: "비밀번호를 입력해주세요.", minLength: 5 })}
                    placeholder="Password"
                    />
                    <span>{errors?.password?.message}</span>
                    <Btn>로그인</Btn>
                </Form>
            </Contents>
        </Container>
    );
}
//recoil로 받음

const Container = styled.div`
    text-align: center;
    display: grid;
    place-items: center;
`;

const Contents = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh; 
    flex-direction: column;
`;

const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 20px;
    font-size: 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.GRAY};
`;

const Btn = styled.button`
    font-size: 20px;
    position: relative;
    background-color: ${(props) => props.theme.colors.BLUE};
    color: ${(props) => props.theme.colors.GRAY};
    border: none;
    letter-spacing: 1px;
    width: 400px;
    font-weight: 300;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    margin-right: 20px;
`;