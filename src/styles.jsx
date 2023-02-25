import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    overflow-y: hidden;
    height: 100vh;

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 30%;
        left: 30%;
        z-index: 2;
        color: white;

        h1 {
            margin-bottom: 5px;
        }

        img {
            width: 150px;
            margin: 10px;
        }

        div {
            width: 200px;
            height: 2px;
            background: yellow;
        }

        svg {
            width: 100px;
        }
    }

`


export const LoginStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    background: white;
    
    h1 {
        font-size: 1.2rem;
        color: #1e71a1;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        margin: 10px;
        padding: 5px;
        width: 200px;

        p {
            margin: 0;
        }
    }

    .login {
        background: #1e71a1;
    }

    .register {
        background: #3d95c0;
    }

    .about {
        color: #3d95c0;
    }

    img {
        width: 30px;
    }

`

export const Sidebar = styled.nav`
    height: 90vh;
    width: 20%;
    position: fixed;
    top: 10%;
    padding: 5px 10px 0px 10px;
    background: #eff4f7;
    font-size: 0.8rem;
    z-index: 1;
    transition: 0.5s;

    p {
        margin: 30px 0px 0px 10px;
        color: #3d95c0;
        font-weight: bold;
    }

    img {
        width: 200px;
    }

    a {
        text-decoration: none;
        transition: 0.5s;
    }

    a:hover {
        background: #a2e0ff;
    }
`

export const Main = styled.main`
    display: flex;

    @media (max-width: 680px) {
        main {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        main div {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

    }

    button {
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: #3d95c0;
        z-index: 3;
    }

    .buttonOn {
        position: fixed;
        top: 15%;
        left: 1rem;
        display: flex;
        align-items: center;
        background: none;
        border: none;
        color: #3d95c0;
        z-index: 3;

    }

    .none {
        display: none;
    }

    .blue {
        background: #3d95c0;
        color: white;
    }
    
    .sidebarOff {
        transform: translateX(-100%);
        
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        margin-left: 20%;
        margin-top: 10%;
    }

    .mainOff {
        margin-left: 0;
    }

    .pacientes {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0rem 2rem;

        h1 {
            font-size: 1.5rem;
            color: #3d95c0;
        }

        a {
            text-decoration: none;
        }

        th {
            background: white;
            color: #1e71a1;

            :last-of-type {
                text-align: center;
            }
        }

        tr {
            color: #585757;

            :nth-child(odd) {
                background: #caeafa;
            }
        }

        td:last-of-type {
            text-align: center;
        }

        form {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 1rem 0rem;
            

            input {
                border-radius: 5px;
                width: 50%;
                border: 1px solid gray;
                padding: 0.5rem;
                
            }


            button {
                border: 1px solid #3d95c0;
                color: #1e71a1;
                
                
                :last-of-type {
                    background: #3d95c0;
                }
            }

            button a {
            text-decoration: none;
            color: white;
        }

        }
    }

    .novo-paciente {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 5rem 10rem;

        h1 {
            font-size: 1.5rem;
            color: #3d95c0;
        }

        a {
            text-decoration: none;
        }

        form {
            padding: 5rem;
            margin: 2rem 0;
            color: #1e71a1;
            box-shadow: 0px 0px 24px 4px rgba(209,209,209,1);

            
        }

        .orange {
            margin-left: 0.5rem;
            color: orange;
        }

        .buttons {
            display: flex;
            padding-top: 2rem;
            justify-content: space-between;
        }

        .buttons button:first-of-type {
                border: 1px solid #3d95c0;
                color: #1e71a1;
            }
    }

    .back {
        width: 5rem;
        background: none;
        border: 2px solid #3d95c0;
        color: #3d95c0;
        margin-bottom: 1rem;
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        position: absolute;
        top: 12vh;
        left: 300px;
        a {
            text-decoration: none;
        }
    }

    .notes {
        border: 1px solid #1e71a1;
        border-radius: 5px;
        width: 70%;
        margin-left: 20%;
        margin-top: 1rem;
        margin-bottom: 2rem;
        padding: 10px;

        h1 {
            font-size:1.5rem;
            margin-right: 1rem;
            font-weight: bold;
            color: #1e71a1;
        }

        main {
            display: flex;
            margin: 0;
            padding: 1rem;
        }

        
    }

    .notesOff {
        border: 1px solid #1e71a1;
        width: 70%;
        padding: 0 2rem;
        margin: 1rem;

        h1 {
            font-size:1.5rem;
            margin: 0 1rem 0 0;
            font-weight: bold;
            color: #1e71a1;
        }

        main {
            display: flex;
            align-items: center;
            padding: 0;
            margin: 1rem;
        }

     
    }

    .form-steps {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 1rem;
        background: #caeafa;
        color: #1e71a1;
        font-weight: bold;
        border-radius: 5px;

        div {
            margin: 0px 5rem;
            text-align: center;
        }

        img {
            width: 5rem;
        }

        p {
            margin: 1rem;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    gap: 10px;
    color: #3d95c0;
    font-weight: bold;
    padding: 1rem;

    .blue-square {
        color: #3d95c0;
    }

    .red-square {
        color: red;
    }

    .grey-square {
        color: grey;
    }

    .yellow-square {
        color: yellow;
    }

    :last-child {
        padding: 0 1rem;
        flex-flow: row;
    }

    .numbers {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            border-radius: 5px;
            padding: 5px;
            color: white;
            cursor: pointer;
        }

        .blue_icon {
            background: #3d95c0;
  
            }

        .red_icon {
            background: red;
        }

        
    }

    .graph {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    hr {
        width: 6rem;
        border-top: 4px solid #3d95c0;;
        margin: 0;
    }

    h1 {
        font-weight: bold;
    }

    .red {
        color: red;

        hr {
            border-top: 4px solid red;
        }

        a {
            color: red;
        }
    }

   


`