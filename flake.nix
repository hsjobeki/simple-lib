{
  inputs.dream2nix.url = "github:hsjobeki/dream2nix?ref=nodejs/strict-builder-draft";
  outputs = inp:
    inp.dream2nix.lib.makeFlakeOutputs {
      systems = ["x86_64-linux"];
      config.projectRoot = ./.;
      source = ./.;
      projects = ./projects.toml;
    };
}
