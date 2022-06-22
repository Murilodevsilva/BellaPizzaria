let pizzaJson = [
    {id:1, name:'Muçarela', img:'https://corta.link/KTSrX', price:25.99, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Esse sabor leva nada mais nada menos que o queijo muçarela em abundância, molho de tomate fresco, azeitona, rodelas de tomate e orégano!'},
    {id:2, name:'Marguerita ', img:'https://lh3.googleusercontent.com/UuoCVqrjwKyKk0CXsFedDh9bqGBTYW0eZ_DJJxP4uESEI17lLHUNfeyUk-_qah-ePfjySJs-oF_WAnS0kxqWHNCOK2HTds67bdmaF6q_QYr1Yc_oUdtX_FkRNTWl8_kCTOlQ5_kC3slE-SyY197chRDz-kqu94tHsahmUpzfLqIlFq3H0tDBUJFoP33wJEnlgS-Ugzmcf2lGOMcQcBBFUs9HdG-MPV0upgTKiXxFgqc2h8BCNjmXvZzB5Xgph9VgC08LKIpLfNGLmkXmMZdfu8IA9fSsMY9r0Va5eiFc6SVd1QTBcSU1N5IViNQrfWrJV0SXQ0aFA92E-nrW3OpJcAnjQLs81QsbP2jNROVUy-s-FO9K2E4StrTyowTvGzINNFk_mXCYRFypNkvYQ9OSct0QcjpSTJxEeu9Ml9yyTTEZ4WL9UIdKPWnjMG_bfiRPOv8RvOhqz5n2jdChFWKwuu_XF0PYo2xRii0FLxZac0T-JVu37EWj5pyhRmP7PThylmpaD8xjqQpjz4JPzNjBdiVM2cMuuiHJfsX-7v8snPoYlmRw7UimOrgulUof0kLpsIZhqDipG7CWyyVcsn92ZWDt2ERDfg6FnZN6EzKv7aMCP3WX-5TcR-9oqeY2ag6tQzoRPxOkvug4p9RnxxPJQ-NCVAPlTs-hnOoPPX9mE26WbeZ5-Tj7pnpgN0sTo673f_KX3z6abefPXpIPExhR0iZdvi32CV3NxeivdzDqxT-2kKit4zkw_n0RlxxNup6YTSyvOHrhuzIGxYwd6yddNc24ayzX2agt-w=w642-h649-no?authuser=0', price:22.36, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'É preparada com molho de tomate, manjericão, rodelas de tomate fresco, azeitona, queijo muçarela e orégano salpicado. A pizza fica uma delícia e a apresentação super linda!'},
    {id:3, name:'Vegetariana ', img:'https://lh3.googleusercontent.com/ypcdQ4xiFW3rDQjg-olD75qMmf4wFpZZZUlVK9F4PyFCinsbOtI47kCyjVOL3YqxQrx5no7iRXtj562nNppHNWZ12eGFLnMPdAcpZbttRzKKYnp5FlAWsDqo_Eo35N-33BrSrVIeVHsgtwjolApFncy3qwCQXXUiyT5_ddaFO45vT2U2FYkKddLj_y5Mby63OfYTZag23a0d2ejJzp5jFIGF4OGJqmfv-RuQpLpFQZEC6lsAkHh7q5wWdXiy6NB8hsWdDKcJrXbnd_CSIVDuW1WEg6mDyiEjCnaTnK6iD1G5c1BmCVM7MlELXuoNuqssx78CyZuOttzL7lkzlwNRykhFEsRGvc90HzcpX86BRh_6IxEjPYaxqgjeQSByPEU6r2_8myRfzSen9DU2c1d4150o7ple9W_Mf4SXV0YgSxiJCa1yv5xwhLjjO-YUkvayZDsqP0vCqaDEyvNYjpJJA0Z4xZAvL4qPJrj7TxUIniNI-Po7Tnl66JI_9gww17H1FRUMgF959RRs8DWvDXExibXPAeTWxeg8s_p6AxxixC-YHwadOVRAcLOObm5jaDG7nEav9bz4ZdswVbpf24iqFWoOfhockkebNQ_rqR5LuWSUok9tXFwfhkzR6d67v0a4rAANHGWoznnzBc0WgzCVn6GXaVAnJPsOl2YNYFSyzUzXj26LSiEAN1JBUdayZzWpHF0IBQr3RRL6T8D3bvLT5gron5nyOI9dr2NaIWgiaoljP6-iQjzHN3FxIPivA8EiH0FAuj6JQHH6_veCYxmny0H51oMHoFPBBA=w642-h649-no?authuser=0', price:22.36, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Esse sabor é uma combinação de cogumelos com queijo cremoso. É preparado com um mix de shitake, shimeji, champignon cobertos com catupiry e tomate cereja!'},
    {id:4, name:'Palmito', img:'https://lh3.googleusercontent.com/PPTzmdSmGkWZR7SNbahkBU3uCjkNsAuBLzz5bQP2mGkgUYft9wjJkgzPRjzqOiaLNlMt46aWOCvyPTUABFrvwtRIBw6g_0IfgDqF3eIOG7YU9hw5n-u6WSQqx7QRqoehiwrDzdtGKrzIaoWNeglBDfuUGFmFCH2pwBhlNKilB5UKsYaYB6KLy3wcIJcORpIjFohQ9Ruf8HmwKOY8dOoPgkvQFACyNCx2xZoSs3OXWIHiyzuSf-JflksOZ0RH_Rto0He48vw0pecQTAUrYZCY-KBLa778WTBietuQCy6B2Jf5zPQTA402YkPpBjxxedqmuJN6ex3vPy_XnjR51PXXwXp57UvwIeA35g2hTwtzRQ69CYyWcFZlUfAXVLP01l0Mcefe3TJwwyXpqdy_kPWD8Z7U2E5brrQmllPsw2lwn8c5_-DDZiVLNLlKufTyql_byfcLmmOlvdwfRg0UXWvsVRW9zp3zn3bf6FWCVNCrV8zAOXByUANFIPOCwxxQxzb-j7Pc2LIRGaOBOeI5UhKX6ASXR5Qyd7dB4Z-OmZrvVmw98EBI80POsmpuFOCu2k_x2QOmtNCkAHeDX_1Pgfc5o8me7BC9vliP8QNytvlSCcdJz8QN7WxWywWJuHfzqX-J8CsQwIcSEg_p90-jpW-jc06lyERdBLM0LnSDSyjwH7QwK-5pnrYjgmRenMrwkMyD6dPxLtfFvCO-Dcx3OktK2NPJXEjzaUH4u8X_0rLx7Ll24159bulpNq4qLFBCDoS6-n_EjcCZsj41vkuRg972NoAQc5P5t_zo_g=w642-h649-no?authuser=0', price:18.55, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'A pizza de palmito vegetariana pode levar molho de tomate, palmito, azeitona preta, alecrim, queijo muçarela e fatias de tomate.'},
    {id:5, name:'Canadense', img:'https://lh3.googleusercontent.com/I82zi7zvumkc7s5d7GumnqpTZF0QU5Dc6tvlLxUBwytR9MX4oMW_MRC5z4NDAJ660fE_L6DrMyG6EF-P0E1DOXD3rWjnM_gTeItMOPAz8FhDTwic9rj4HKRFNZtCXRDUtIOKDXWWl7y70efHizBXYMfg3ZrEdMs7i69YS3FIqJmfMsuhoY9r5OnH6c0r67eCLNhx3_lfTCPW9gZjFOF_wt69PcKCwTFJkYR61r3_meeOTGMF1Zf_G658r6--ub8conlzX-7DZ_8aFFyjJydNHBqhx0F6_6G32ZTTkWj4881xmE4wb3FL6HtTdQMIhOroHkwsM8f_LBnZPnzuUjUGdevyQeGRvuZRq-77tRH7rpKfAIPFeO8-b7BX69eyiTy27vYknr15hO4NwtmwpGOrKByJBA5znpwHh8vv9UoY9uMYg61FqWaZCINp09i_oAD4jqpZwH3nvCSkYioweMTd0ZKdIuEPGJCXWcAE5ZCkYE1qB-eDHdQI0Jk4R_XVfJH5g0ZQ94kxX2pmE7HzgIpni-IFekmbjUt-elRhSCC890tWSMLKulIkd0FCowYGP2Xf_R5q2ZsMbva1lATa2a4HtdiwVQVvrUg6InpH5o6L3EMjf-Ys5Ge2QWXbh_YaZyRM0xcT2d55tT0ADT6Vw_gaULC35gEnAZq0rumLyb0tHiMSKWY0F2E1hVbSjACqH2_txNWi_xccf8d9Dtjp75X8Oq04TDwLbddnyj5moPqYEMNun0T5rrYJG4ridvn78tfab09A-v39HPU72iMU0QRiQby8OfMOl-A2hg=w659-h649-no?authuser=0', price:21.43, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'A pizza canadense é recheada com lombinho, champignon, cebola e bacon crocante. Pode ser coberto com requeijão ou queijo muçarela.'},
    {id:6, name:'Tribeca ', img:'https://lh3.googleusercontent.com/T_BGkZh2tneQwC2dqb0Q0HpKrwjKpWSQfdvYOXRJjk44WDBIq8I-vkszzl656UOjBRYu6rZnvW8sjMICmNTgI2_JrWav1YUoJe1ZiitOnnThqjOlFzpKWEkk-FM7mudbDgcdqWoY8UG_ZriTAdGUEtNvQJRLjL6LRjH1TTrtDrabzGOk_dPezv2fjpqbCQwjBX4an8fJT6rsViJzIUQilkKNy1kI9cQO63GiVStC3_lMKatkY0shtm_JtfVTs8DsrlMmvzzIc70ejaM6eKpXoH1YeBVkczyz3Kkal4omBTjdTM-V9-8XthL9Lvg4X59lFS0TcsTzJ62P2Mr00eBSqf9YTdSKLedpVQGaSzRbYocJ0wo1U9c3T-NC0xtQHkckNfiHfhXVXyj9yPCgnveP7yNYd8znc1CTbnFnKMCe13L0PEK34vACF6lbxe_mw1443pNFYDZTCVpX-fS07EsXJz3kjvE2vV2wfUi2yiJIJjncxlTuSHtPc8ikOy3o0vkiGNhyBExN0DNkB9rUbFaJ6HXF8rXU_4ZwN09kjjyrN4kfc5AJG-Ktck1HjAGV6lVmDbXuH0reJHhTobhOg2L1c9boVorAaeh33Y4qjxY4QsYnBQKcur3oERApGMEKIaRa-dADoewd98k_owCL2oBYKXFQCb5hUbnkWeVO6ba4BJXhzbmmyBnkhMpuF0BJLk-RTblpFPRG7wFGsjfLkADKFMmMb_ikImDXKbEyuN8z0MNQpztZ8SOilgUsuIdtqAMI4O8qVgXDOXW5aexutDRIYi4jfV1IIuI90w=w659-h649-no?authuser=0', price:19.77, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Oxford estampado Marintex tecidos'},
    {id:7, name:'Estrogonofe ', img:'https://lh3.googleusercontent.com/-zWYRu76y1MANKYL2qX3qURlvqm1J3ThO8U6YUrx6A7P_tXqnFsd4RJFy2_ddjr5JLYBzcjE43b4G6_5ptlSS1uM9-XJ73XH7u59WRZupDPdV05Th1A70Rrw_0FAihk_0SRPM_aVtcokL1OIN2j85ikhLVBiKJSJFJ5LlezNb4hnbYNMagAUwwk-gRZjbZwSD62v7C121pLVziGvH9sPazMllkDLwyZSwPWMq2ErRDH6mUIjkS5mofcxivgYRwZvOBB-KX_iGaqWA5KFZGYNUFoDoStsdcf1c65S2ZidRCage6Fbq8kFuVRZIt_bCnUWmTB5J-SfaNtUlbYEfg55H9wjsvs7P3adwrq11MRCKll0yVJWjHwZOjg88dyXYQ44AHMC7AofF1_9PZ1aCaYWy17uaUnnF9oSAe8qFrCO2rawSSkBU4TuMD7M4lYeULq56VQmwFyuVLg5RYX86vzwXIc1OjWonWDmL7C-7jv34lnK2OuEDuvDpB9YZhdy4t-CSRNe5T7IR93WIn2glA6en1GyM67LI9ZkR3C8ybZu2FV8ZXzAM-WR4z0Bl41TfZfCOdybU2eCy1V9uqmvx9U4_zzGZBy9ylNknWH4SLm4fp6WNLe29A83mV3zxr9Knm0ZyRPDm30cJa4jb1BzG5tgdbNpLt4yZafgrvSl87nWrZqPt1Rn2HcsXBzCEdK7TRA7NDZ35pErTLfrevUl_IKTRW3plREn0sJRwx3vNLm79z_5drxwkFMAi_mckf90Hg06n2fN2P_RciwcVNajuBcqtRT28EvlmKe5uQ=w649-h627-no?authuser=0', price:17.45, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Nem precisaria dizer o que vai neste sabor né? É composta por carne, creme de leite, batata palha, queijo parmesão!'},
    {id:8, name:'Frango com catupiry ', img:'https://lh3.googleusercontent.com/a023PjACO0RvhJ_g69D0BViFCJMgUMq1E4vvVHj2dursjPmyupC9f203fyu-tNlcwhKyOC5NvMCSFdOl2FRdHcoA6JZ_bms6SPkXSG-5h2Mg9eH_HOadzpM-r7FHw6-aX9cdC3D-89wSfox64einf2-2KIRpg_HZytJxWcNYdRRF6XP0hRAp3zF8oro2OvXlxxmOMM8ouJRwwKs007MhxANVs5YpGuSh5BYQ0o7kegKUQl6dbNlxPDg-FDaIPW4vAGyWvgs1LPjG_ON8ym5k3TwK3ObrlxOKxeEYZU1h3cjFBQWhCRDhWKATCLblFJdSnYDOxjXcNubFFcC4WU7aYxImNzlXHPWumexiGQT7kQWJl6pGKGM293EkAEscqpVz0NmowkNY5dmocDmJPxQvlfBG-K4d8fJtBNI_mg6RN61_lfLAXC-MvyiZZATtzlcX40ePiY590cp4SQeWmEJcVt0H1gykkdWmNhzdlEGnxFVx5rrhwg2bs8dc5iWVm-4Q1FMYa4mJwQjN-0P7TWXkz50pSEpV2fbfWLFFRgPMpLvplPuVHytBiJfwpLwFazcE96gn6v-fMJBSH8zAtZM9pJoQubWXPrcbrXc2k1oGttEYOo_tQyWmW9mcDbiMJk-HduqGSasiM05kMjgAPjSPUq3jCSNpOOKI_ekpL8pw7z1hUcLBJ8gaDQnC5KL9kGn5PzvA_mpq7RMjyTpl_G9PlaHwfWQubUsKeIcFtoGzn1OS6Mlie-6YU9CtgaaqzQAjhhwdAbmH80nWUWW6YZ8X9-PkZLb0YG2EIw=w651-h649-no?authuser=0', price:18.00, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'A receita costuma levar basicamente queijo muçarela, frango, catupiry, sálvia e molho de tomate. Confesso que é uma das minhas preferidas!'},
    {id:9, name:'Americana ', img:'https://lh3.googleusercontent.com/1rWTjKulczv8x3Ske3rFlb8hYAHxmuhf-2hXMSG8S_QmakKQRQ5j_ppPp3gRDKga7Me54v7MhFlT4D4gaSGgC8f_46d0TZAnB5nob8OlKBuVqhNZUxP9wGMHA1IoEqKdh40DnlB818z2tyYTWHWvzSbA1rVZqK7r5rDk17e1DcTwHdh4Zprsbw5mQbapo8RraolRDRArm2HHR8V_SDNZjwnNWeV03d2xlKqOPn66mLkXWECCttZdpSnlIDZiOUn9H9zRffUCxxYUfsVdS0Q7P3cgf00PF2JgLh4hLaVFyMa_2rRlZPkl2dnIBGD1mToIpdmnD2yULd2LD9QUet3R9g42xAAQ4uHfG4rjfinhuFzvZ6ZtwoMUB7SU9dwpgDVO6yeUgiFl2MU2ruiUuIC6UQ6Pl33ee1suug90oT395dV-LW3vt2k9sj0cN6dr82YIiSPzCeF3BSJGmgp8gqpFRuSf9MC6jdbjWMZwXCVZIHanbUlqtIgWZUE5cX2yJZ5b2hOYXAbpHWG4SZ69UPTosmpxC6tjj2-7dY93ta0zmL38lSH2qtxQ40In6GTEo-q-IutDnKp68tWel9-k27kKrufDIcBpzELDoMxGnzuNwGdpalyLRTcfI7I-8p4KgItwF_Ox8Ze4e9b9otFI3j9diH6Vd9oCkD-s_pEMCCZcFiJy0sLkD5KjUyRgNtvXbEiFdWeWWvYCs4UkvOM_tMLKJlvor1TAA7afw_00kO2GOUPKxTuzQnSRJi3cgKDtPpktypWnpjazVWoq6_YFmRYUhqqCzdkgUY1QvQ=w651-h649-no?authuser=0', price:20.19, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Essa pizza é composta por molho de tomate, muçarela, tomates fatiados e bacon.'},
    {id:10, name:'Parma com pimentão ', img:'https://lh3.googleusercontent.com/j9XO6AoEuEni0vRMlNoLKyOVi9hR_6ELl_pSHXG80u-fUK2REE2PSmhxyKuSYsPUBlIVSy1k5UUbdGyF769IJj4R9OGrf0o3IYksSYM7TD-NNCvvXhaodoSZV1TbGsMhZ72GYETc3aEGJtlewNefvEbuWFfYSSCcjPti5hjg2fBnmI1hQaaMtEo4l4FFbgUswB1lWYcFNYJ66rc3rMkIAAJDeRjVThLwB80FFQ6xUHAi1oX0u9tjLgmrivKk2WPwVRKTiZtlT0aMFPwxCEzU-bDuZx-Xu_2dHV3e1Bx3rB1kaVi_Q9SJe1n4LApUV2tbLEDFU0L7iGeOwnRd_rx9EhCcfJkHIz-UQGleFvM6nvvMiqW_Xg8MYsNHljhIANwOgJBWdqPjQf-FZpFwPY241r4D149n6WEAiDGCrHZG20SBW7tfjSXHbu2kQZ3g7IxF6OiDc7UFM4Bhv-Je5SlMB2ip58nI0TSvrerL1j9AxOfkQVSY7Kfd_yi3MSFZFoAd38JyrDGGx4CwiroeLcpUIrT3yRkoGyo0yHxddF6z8n8NisXd7fMsAgytd-JHKVjGMWgw9pYKyfAAXGFlM27qubVc-7Ghh2Rhchz7IqZn9bXgiIMzK-YMwoTRfwITZKM9XikYN7hmXg3DAw7QKSrzJ9KdnMr5M2ChOnWKo1-ix4rZxSlfFeVudeQzN1KWjJwzhGqv36l-AtSnrro_PuG-3LmkUgZ1NExN5AJ0Bb-w1R8xgBXF9aZWAKA4c7WL9VY6dyXciSSBI3A5oXAQbjRaBlnW4ND9Zr1utQ=w651-h649-no?authuser=0', price:20.19, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'O sabor de parma com mussarela é preparado com presunto tipo parma, pimentão fatiado, queijo muçarela, orégano e tomates frescos! '},
    {id:11, name:'Nutella e M&Ms ', img:'https://lh3.googleusercontent.com/0lXHWe4EmwfHLHfc8rnpaHf36I3Mn2MQtCGAcokp3H71cA7KbxSnqh8ndrR2s6S_e30aJDKmkp-QkmS3ve02v4eJwG4adrQemLlIB4tilPFfIm_Lnca7cUaJGsyO81mT1jaVCuXqRUPTUl3IlpViZeLzsuZT5lTPQYkCBxPL7WnP8il0qxV6hRGKhkTwTj6LKoR6j2gm0oDGt52Hh5ZIQxvGAn0AOH5Pt_NkVbRrhnHbNQozOtNyp6QzHb_GKCjVRqMCHV4-yaMmcXekS1hiw_sRU7mL_s1ZlONLK_JZ5lTC9NKd6ueuTQTaOPNGzc7NndYDK-PV5WefPhVtFl_XvajjbUnxkbJBngFCElvdG0xd8O7B30KZXzrHzKLHIurZ3HBGXjUVpl4BMrubjLfYrE9yR4o2J-63R8ah3CC8txLIatSPNAYSH4oFvG8DZODzp-Vq_GRxaJ6UkcKVVCmw-gZLRTs6lyk-TNS2lhO6I0n0U4VSrg2l59iuLJ3pRraxiMSrCoKp4EEzIXRhoL-i56wPJba93M7NJ7Wx0LOjtUlWtPYvkag2L2YORzPmR6gT3zsUt--A7BWdrVvpPAZ5H11U8UVxujZwka-iJn3UpAIYR7NChmc_S0X8SO8TXLbwVv9cKPa7-rCnwFdKQm_lxYBZsKDH2TB3ccK-Qlz9Rr13asFKhAhAJG7Zqj1TBBaYN1fp5MPRSn_-WrfkazKaaXm4AOK_d9je1Ig1BOYLwLa8XHjH2rTTmLt50mNGZP5Ha0vpe-gP4Pxxok_8tBO9L-0tmsxALkQ_NQ=w651-h649-no?authuser=0', price:20.19, sizes:['6 Fatias', '12 Fatias', '15 Fatias'], description:'Um clássico de origem brasileira, Nutella e M&Ms é uma das pizzas mais pedidas e populares, imagina só Nutella com M&Ms. Nem preciso dizer sobre a sua preparação, né? Simplesmente magnifico!'},









];
