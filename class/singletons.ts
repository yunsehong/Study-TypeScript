// Singletons란
// 어플리케이션이 실행되는 중간에
// 클래스로부터 단 하나의 오브젝트만 생성해서 사용하는 패턴 

class ClassName {
    // c1과 c2에서 만들어진 하나의 단일 오브젝트를 공유하는 개념 -> static
    private static instance: ClassName | null = null; // 최초에는 null 


    // 매개체를 통해 단일 싱글톤 객체 패턴을 만들어낼 수 있음 
    public static getInstance(): ClassName{
        // ClassName으로부터 만든 object가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴 
        if(ClassName.instance === null){
            ClassName.instance = new ClassName();
        }

        return ClassName.instance;
    }

    // new를 통해 클래스를 생성하는 행위 자체를 막아야 함
   private constructor(){}

}

// new를 통해 직접 생성 불가능 
// const c1 = new ClassName();
// const c2 = new ClassName();

const c1 = ClassName.getInstance();
const c2 = ClassName.getInstance();

// 같은지 비교 
console.log(c1 === c2); // true
 


