export class MkSurl{
	useDate(){
		return new Date().getTime().toString(32)
	}

	useMath(){
		return Math.random().toString(32).slice(2) 
	}
}