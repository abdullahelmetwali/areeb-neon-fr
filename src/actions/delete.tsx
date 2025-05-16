import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query"

// id شوف هتسمح ايه 
const Delete = (
    { url, id }: 
    { url: string, id: string | number }
) => {
    const { toast } = useToast();

    const deleteMutation = useMutation({
        mutationKey: ['delete-item'],
        mutationFn: async () => {
            const res = await fetch(`${url}/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete , please try again');
            return res
        },
        onSuccess: () => {
            toast({
                title: 'DONE',
                description: 'The action of delete done successfully'
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
            variant={'default'}
            type="button"
            onClick={() => deleteMutation.mutate()}
        >
            Delete
        </Button>
    )
};
export default Delete