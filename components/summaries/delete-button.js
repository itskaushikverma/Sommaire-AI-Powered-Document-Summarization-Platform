'use client';

import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { useState, useTransition } from 'react';
import { deleteSummaryAction } from '@/actions/summary-actions';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function DeleteButton({ summaryId }) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    startTransition(async () => {
      const result = await deleteSummaryAction({ summaryId });
      if (!result.success) {
        toast('Error', {
          description: <span className="font-semibold text-red-500">Failed to Delete Summary</span>,
        });
      }
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="border border-gray-200 bg-gray-50 text-gray-400 duration-200 hover:bg-rose-50 hover:text-rose-600"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this summary? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            className={cn(
              'border border-gray-200 bg-gray-50 duration-200 hover:bg-gray-100 hover:text-gray-600',
              isPending ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            className={cn(
              'bg-rose-500 hover:bg-rose-600',
              isPending ? 'cursor-not-allowed' : 'cursor-pointer',
            )}
            onClick={handleDelete}
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
