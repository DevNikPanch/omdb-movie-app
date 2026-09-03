import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Toast, ToastType } from '../types/toast';

export const useToastStore = defineStore('toast', () => {
    const toasts = ref<Toast[]>([]);

    const addToast = (message: string, type: ToastType = 'success', duration = 3000) => {
        const id = Date.now();
        toasts.value.push({ id, message, type });
        setTimeout(() => removeToast(id), duration);
    };

    const removeToast = (id: number) => {
        toasts.value = toasts.value.filter((item: Toast) => item.id !== id);
    };

    return { toasts, addToast, removeToast };
});
