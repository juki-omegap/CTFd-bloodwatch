const Score = ({ user }) => {
	return (
		<p
			class={`score ${user.placement === "No" ? "header" : ""} no${user.placement
				}`}
		>
			<span class="placement">{user.placement}{user.placement === "No" ? "" : "."}</span>
			<span class="name">{user.name}</span>
			<span class="solves">{user.score}</span>
		</p>
	);
};

export default Score;
