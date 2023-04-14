<script lang="ts">
</script>

<div class="h-full flex items-center justify-center">
	<div id="LoginContainer" class="card flex flex-col m-4 max-w-2xl h-full">
		<!-- <div>01</div>
        <div>02</div>
        <div>03</div> -->
		<header>
			<div class="w-max">
				<h1>Login</h1>
			</div>
			<img src="bg/Candidate1.jpg" />
		</header>

		<content class="">
			<div id="authForm" class="card ">
				<label class="label">
					<span>Email</span>
					<input class="input" type="email" title="Enter email" placeholder="john@example.com" />
				</label>
			</div>
			<div id="authControls" class="grid grid-cols-2">
				<div id="signUp">
					<!-- TODO abstract singup providers -->
					<button type="button" class="btn variant-filled-surface w-56">
						<span>Register with</span>
						<span>(icon1)</span>
					</button>
					<button type="button" class="btn variant-filled-surface w-56">
						<span>Register with</span>
						<span>(icon2)</span>
					</button>
					<button type="button" class="btn variant-filled-surface w-56">
						<span>Register with</span>
						<span>(icon3)</span>
					</button>
					<button type="button" class="btn variant-filled-surface w-56">
						<span>Register with</span>
						<span>(icon4)</span>
					</button>
				</div>
				<div id="signIn" class="flex flex-col items-end">
					<button type="button" class="btn variant-filled-surface w-56">
						<span>(icon)</span>
						<span>Login</span>
					</button>
				</div>
			</div>
		</content>

		<!-- <footer class="card-footer">
			<button type="button" class="btn variant-filled-surface">
				<span>(icon)</span>
				<span>Signup</span>
			</button>
		</footer> -->
	</div>
</div>
