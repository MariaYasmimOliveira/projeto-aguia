--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-10-07 08:22:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 16484)
-- Name: alunos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alunos (
    id integer NOT NULL,
    nome_aluno character varying(100) NOT NULL,
    telefone character varying(20),
    data_nascimento date,
    instrumento_interesse character varying(50),
    data_inscricao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.alunos OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16483)
-- Name: alunos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alunos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alunos_id_seq OWNER TO postgres;

--
-- TOC entry 4909 (class 0 OID 0)
-- Dependencies: 217
-- Name: alunos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alunos_id_seq OWNED BY public.alunos.id;


--
-- TOC entry 220 (class 1259 OID 16492)
-- Name: monitores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.monitores (
    id integer NOT NULL,
    nome_monitor character varying(100) NOT NULL,
    telefone character varying(20),
    data_nascimento date,
    area_interesse character varying(100),
    data_inscricao timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.monitores OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16491)
-- Name: monitores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.monitores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.monitores_id_seq OWNER TO postgres;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 219
-- Name: monitores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.monitores_id_seq OWNED BY public.monitores.id;


--
-- TOC entry 4747 (class 2604 OID 16487)
-- Name: alunos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos ALTER COLUMN id SET DEFAULT nextval('public.alunos_id_seq'::regclass);


--
-- TOC entry 4749 (class 2604 OID 16495)
-- Name: monitores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.monitores ALTER COLUMN id SET DEFAULT nextval('public.monitores_id_seq'::regclass);


--
-- TOC entry 4901 (class 0 OID 16484)
-- Dependencies: 218
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id, nome_aluno, telefone, data_nascimento, instrumento_interesse, data_inscricao) FROM stdin;
1	Marina Rios	6799999111	2005-11-12	guitarra	2025-10-02 16:15:14.021011
2	Laura Rios	67991941598	2010-05-26	bateria	2025-10-02 17:27:12.298171
3	João Souza	67991557889	2011-04-15	canto	2025-10-06 11:07:27.656297
\.


--
-- TOC entry 4903 (class 0 OID 16492)
-- Dependencies: 220
-- Data for Name: monitores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.monitores (id, nome_monitor, telefone, data_nascimento, area_interesse, data_inscricao) FROM stdin;
1	José	67991456899	2002-04-12	violino	2025-10-02 16:58:12.824151
\.


--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 217
-- Name: alunos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alunos_id_seq', 3, true);


--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 219
-- Name: monitores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.monitores_id_seq', 1, true);


--
-- TOC entry 4752 (class 2606 OID 16490)
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id);


--
-- TOC entry 4754 (class 2606 OID 16498)
-- Name: monitores monitores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.monitores
    ADD CONSTRAINT monitores_pkey PRIMARY KEY (id);


-- Completed on 2025-10-07 08:22:14

--
-- PostgreSQL database dump complete
--

