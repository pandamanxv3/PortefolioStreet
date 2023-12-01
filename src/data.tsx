import gsap from "gsap";

export let animations: (ReturnType<typeof gsap.to> | undefined)[] = Array(10).fill(undefined);
