import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query"

type DATA = {
    email : '',
    // شوف ال types
}
// id شوف هتضيف ايه 
const Add = (
    { data , URL}:
    { data : DATA, URL : string }
) => {
    const { toast } = useToast();

    const addMutation = useMutation({
        mutationKey: ['add-item'],
        mutationFn: async () => {
            const res = await fetch(`${URL}`, { 
                method: 'POST', 
                body : JSON.stringify({
                    email : data.email
                })
            });
            if (!res.ok) throw new Error('Failed to add , please try again');
            return res
        },
        onSuccess: () => {
            toast({
                title: 'DONE',
                description: 'The action of add done successfully'
            });
        },
        onError: (err) => {
            toast({
                title: 'FAILED',
                description: `ERROR : ${err?.message}`,
                variant: 'destructive'
            })
        }
    });

    return (
        <Button
            variant={'outline'}
            type="button"
            onClick={() => addMutation.mutate()}
        >
            Add
        </Button>
    )
};
export default Add