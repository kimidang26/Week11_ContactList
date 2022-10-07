
-- PostgreSQL database dump


-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

-- --
-- -- Name: contact; Type: TABLE; Schema: public; Owner: kimberlydang
-- --

-- CREATE TABLE public.contact (
--     id integer NOT NULL,
--     parentfirst_name character varying(50) NOT NULL,
--     parentlast_name character varying(50) NOT NULL,
--     cell_phone character varying(10),
--     email character varying(50) NOT NULL,
--     student_id integer NOT NULL
-- );


-- ALTER TABLE public.contact OWNER TO kimberlydang;

-- --
-- -- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
-- --

-- CREATE SEQUENCE public.contact_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.contact_id_seq OWNER TO kimberlydang;

-- --
-- -- Name: contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
-- --

-- ALTER SEQUENCE public.contact_id_seq OWNED BY public.contact.id;


-- --
-- -- Name: student; Type: TABLE; Schema: public; Owner: kimberlydang
-- --

-- CREATE TABLE public.student (
--     id integer NOT NULL,
--     first_name character varying(50) NOT NULL,
--     last_name character varying(50) NOT NULL,
--     teacher character varying(50) NOT NULL
-- );


-- ALTER TABLE public.student OWNER TO kimberlydang;

-- --
-- -- Name: student_id_seq; Type: SEQUENCE; Schema: public; Owner: kimberlydang
-- --

-- CREATE SEQUENCE public.student_id_seq
--     AS integer
--     START WITH 1
--     INCREMENT BY 1
--     NO MINVALUE
--     NO MAXVALUE
--     CACHE 1;


-- ALTER TABLE public.student_id_seq OWNER TO kimberlydang;

-- --
-- -- Name: student_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kimberlydang
-- --

-- ALTER SEQUENCE public.student_id_seq OWNED BY public.student.id;


-- --
-- -- Name: contact id; Type: DEFAULT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.contact ALTER COLUMN id SET DEFAULT nextval('public.contact_id_seq'::regclass);


-- --
-- -- Name: student id; Type: DEFAULT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.student ALTER COLUMN id SET DEFAULT nextval('public.student_id_seq'::regclass);


-- --
-- -- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: kimberlydang
-- --

-- COPY public.contact (id, parentfirst_name, parentlast_name, cell_phone, email, student_id) FROM stdin;
-- 3	HARRY	STYLES	8586279393	FOOD@GMAIL.COM	4
-- 4	JOHN	DOE	8583330022	HELLOWORLD@GMAIL.COM	3
-- 5	OLIVIA	WILDE	6192930293	SALAD@GMAIL.COM	2
-- 6	JASON	MRAZ	6192229222	SUSHI@GMAIL.COM	1
-- 7	DOJA	CAT	6789998211	KBBQ@GMAIL.COM	5
-- 15	Kimberly	Dang	8582019016	dang042@cougars.csusm.edu	6
-- 16	Kimberly	Dang	8582019016	dang042@cougars.csusm.edu	7
-- 17	JOHN	SMITH	9499992222	DOGS@GMAIL.COM 	9
-- 18	Kimberly	Dang	8582019016	dang042@cougars.csusm.edu	26
-- 19	LIS	LOL	8582901111	SODA@GMAIL.COM	9
-- 20	JANE 	DOE	8582019016	JANE@GMAIL.COM	12
-- 21	TYWIN	LANNISTER	5108378247	KINGSLANDING@AOL.COM	23
-- \.


-- --
-- -- Data for Name: student; Type: TABLE DATA; Schema: public; Owner: kimberlydang
-- --

-- COPY public.student (id, first_name, last_name, teacher) FROM stdin;
-- 1	JANE	DOE	MRS.A
-- 2	KIMBERLY	DANG	MRS.B
-- 3	ANGELO	BULANHAGUI	MR.C
-- 4	LANY	DUONG	MR.D
-- 5	TIFFANY	CHAN	MR.E
-- \.


-- --
-- -- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
-- --

-- SELECT pg_catalog.setval('public.contact_id_seq', 21, true);


-- --
-- -- Name: student_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kimberlydang
-- --

-- SELECT pg_catalog.setval('public.student_id_seq', 5, true);


-- --
-- -- Name: contact contact_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.contact
--     ADD CONSTRAINT contact_pkey PRIMARY KEY (id);


-- --
-- -- Name: student student_pkey; Type: CONSTRAINT; Schema: public; Owner: kimberlydang
-- --

-- ALTER TABLE ONLY public.student
--     ADD CONSTRAINT student_pkey PRIMARY KEY (id);


-- --
-- -- PostgreSQL database dump complete
-- --

