<script src="https://unpkg.com/kaboom/dist/kaboom.js"></script>
		<script> 
			kaboom({
				background: [255,255,255],
				width: 1000,
				height: 400,
			})
			
			loadSprite ("piso","https://i.imgur.com/lbkacZn.png")
			loadSprite ("cacto","https://i.imgur.com/emcPO2f.png")
			//loadSprite ("dinossauro",'https://imgur.com/ln9hJGo')
			loadSprite("dinossauro","https://i.imgur.com/ln9hJGo.png")
			loadSprite("bandeira","https://i.imgur.com/SdS33rf.png")		
			
			scene("cena-inicial", () => {
				//gravity(1200) 
			
				const mapa = [
				"                             ",
				"                             ",
				"                             ",
				"             c        c     b",
				"============================="		
				]
				const configuracaoDoMapa = {
				   
					width: 50,
					height: 50,			
					"=": ()=> [sprite("piso"), area(), solid()],
					"c": ()=> [sprite("cacto"), area(), solid(), "obstaculo"],
					"b": ()=> [sprite("bandeira"), area(), solid(), "fim"]
				}
				
				const dino = add([  
					sprite("dinossauro"),
					area(), 
					body(), 
					pos(0,0),
					scale(1.0)
				])
				
				addLevel(mapa, configuracaoDoMapa)
				
				//function jump() {
					//if (dino.isGrounded()) {
						//dino.jump(500)
					//}
				//}
				
				//onKeyPress("space", jump)
				
				//onClick("jump")
				
				onClick(()=> {
					dino.jump(700)
				})
				
				dino.action( ()=> {
					dino.move(200,0)
					camPos(dino.pos)
				})
				
				
				
				dino.collides("obstaculo", ()=>{
					go("cena-derrota")
				})
				dino.collides("fim", () => {
					go("cena-vitoria")
				})
			})
			
			scene("cena-derrota", ()=> {
				add([text("Perdeu"), pos(200,200)])
			})
			
			scene("cena-vitoria", () => {
				add([text('Parabens!'),pos(200,200)])
			})
			
			go("cena-inicial")
			
		</script>
